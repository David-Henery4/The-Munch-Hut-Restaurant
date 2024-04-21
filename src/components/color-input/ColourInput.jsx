import { ChevronDownIcon, SearchIcon } from "@sanity/icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Inline,
  Popover,
  Stack,
  Text,
  TextInput,
} from "@sanity/ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  set,
  unset,
} from "sanity";
import { CloseIcon } from "@sanity/icons";
import {
  Chrome,
  hslStringToHsva,
  rgbStringToHsva,
} from "@uiw/react-color";
import { client } from "../../../sanity/lib/client";

// Check "sanity-color-simpler-color-input" package for original component

export const SimplerColorInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { onChange } = props;
  const value = props.value;
  const type = props.schemaType;
  const [selectedColor, setSelectedColor] = useState(value);
  const [colorList,setColorList] = useState([])

  const handleChange = useCallback(
    (color) => {
      setSelectedColor(color);
      setIsOpen(false);
      onChange(set({ ...props.value, ...color }));
    },
    [onChange, props.value]
  );

  // let colorList;


  useEffect(() => {
    async function test () {
      const activeColourList = [];
      const newData = await client.fetch(
        "*[_type == 'siteTheme'][0]{dark, light, brand, accent}"
      );
      Object.entries(newData)
        .filter((item) => item[1] !== null)
        .forEach((item) => {
          // activeColourList.push(item[1])
          const labelAndColor = {
            label: item[0],
            value: item[1]?.value,
          };
          activeColourList.push(labelAndColor)
        });
      setColorList(activeColourList)
    }
    test()
  }, [isOpen, onChange])


  const colorFormat =
    type.options?.colorFormat ?? type.type?.options?.defaultColorFormat;
  const enableSearch = Boolean(
    type.options?.enableSearch ?? type.type?.options?.enableSearch
  );



  const filteredColorList = searchValue.length
    ? colorList?.filter((color) => {
        return color.label.toLowerCase().includes(searchValue.toLowerCase());
      })
    : colorList;

  const handlePickerChange = (color) => {
    let colorValue;

    switch (colorFormat) {
      case "hexa":
        colorValue = color.hexa;
        break;
      case "rgb":
        colorValue = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
        break;
      case "rgba":
        colorValue = `rgba(${color.rgba.r}, ${color.rgba.g}, ${
          color.rgba.b
        }, ${color.rgba.a.toFixed(2)})`;
        break;
      case "hsl":
        colorValue = `hsl(${color.hsl.h.toFixed(0)}, ${color.hsl.s.toFixed(
          0
        )}%, ${color.hsl.l.toFixed(0)}%)`;
        break;
      case "hsla":
        colorValue = `hsla(${color.hsla.h.toFixed(0)}, ${color.hsla.s.toFixed(
          0
        )}%, ${color.hsla.l.toFixed(0)}%, ${color.hsla.a.toFixed(2)})`;
        break;
      default:
        colorValue = color.hex;
        break;
    }

    const formattedColor = {
      label: "Custom",
      value: colorValue,
    };
    setSelectedColor(formattedColor);
    onChange(set({ ...props.value, ...formattedColor }));
  };

  const ref = useRef(null);
  useEffect(() => {
    if (!isOpen) setSearchValue("");

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setPickerIsOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, pickerIsOpen, ref]);

  // convert rgb and hsl strings to hsva so they can be read by the picker successfully
  let pickerColor = selectedColor?.value || "#ffffff";
  if (pickerColor.startsWith("rgb")) pickerColor = rgbStringToHsva(pickerColor);
  else if (pickerColor.startsWith("hsl"))
    pickerColor = hslStringToHsva(pickerColor);

  /* @ts-expect-error */
  const isRequired = type.validation[0]._required === "required";

  return (
    <Container>
      <Popover
        ref={ref}
        content={<Chrome onChange={handlePickerChange} color={pickerColor} />}
        portal
        open={pickerIsOpen}
      >
        <Flex>
          <Button
            style={{
              width: "100%",
              textAlign: "center",
              borderTopRightRadius: isRequired ? "" : "0",
              borderBottomRightRadius: isRequired ? "" : "0",
            }}
            mode="ghost"
            padding={2}
            onClick={() =>
              {
                // test()
                colorList && colorList.length > 0
                ? setIsOpen(!isOpen)
                : setPickerIsOpen(!pickerIsOpen)}
            }
          >
            <Inline space={4}>
              <Inline space={1}>
                <Box>
                  <Card
                    style={{
                      backgroundColor: selectedColor?.value || "#ffffff",
                    }}
                    radius={2}
                    shadow={1}
                    padding={2}
                    margin={1}
                  />
                </Box>
                <Text weight="semibold">
                  {selectedColor?.label || "Select a color..."}{" "}
                </Text>
                <Text>{selectedColor?.value}</Text>
              </Inline>
              <ChevronDownIcon width={32} height={32} />
            </Inline>
          </Button>
          {!isRequired && (
            <Button
              mode="ghost"
              onClick={() => {
                if (value !== undefined && value._key) {
                  // we need to handle annotations differently to
                  // prevent errors in the Portable Text editor
                  const annotationValue = {
                    _type: value._type,
                    _key: value._key,
                  };
                  setSelectedColor(annotationValue);
                  onChange(set(annotationValue));
                } else {
                  setSelectedColor(undefined);
                  onChange(unset());
                }
              }}
              style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
            >
              <Inline space={1}>
                <CloseIcon width={24} height={24} />
                <Text weight="semibold">Clear</Text>
              </Inline>
            </Button>
          )}
        </Flex>
      </Popover>
      {isOpen && colorList && (
        <Card radius={2} shadow={3} marginTop={1} overflow="hidden">
          {enableSearch && (
            <Box
              padding={3}
              style={{
                borderBottom: "1px solid var(--card-border-color)",
              }}
            >
              <TextInput
                icon={SearchIcon}
                radius={2}
                placeholder="Search"
                onChange={(event) => {
                  setSearchValue(event.currentTarget.value);
                }}
                autoFocus
              />
            </Box>
          )}
          <Stack>
            {filteredColorList?.map((color) =>
              color.value === "custom" ? (
                <Button
                  key={color.label}
                  radius={0}
                  mode="bleed"
                  onClick={() => {
                    setIsOpen(false);
                    setPickerIsOpen(true);
                  }}
                >
                  <Text>{color.label}</Text>
                </Button>
              ) : (
                <Button
                  key={color.label}
                  radius={0}
                  mode="bleed"
                  onClick={() => handleChange(color)}
                >
                  <Box>
                    <Inline space={3}>
                      <Card
                        style={{
                          backgroundColor: color.value,
                          width: "16px",
                          height: "16px",
                        }}
                        radius={2}
                        shadow={1}
                      />
                      <Text>{color.label}</Text>
                    </Inline>
                  </Box>
                </Button>
              )
            )}
          </Stack>
        </Card>
      )}
    </Container>
  );
};
