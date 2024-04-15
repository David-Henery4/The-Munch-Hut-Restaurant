/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import { LogoIcon } from "./public/assets";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { iconify } from "sanity-plugin-iconify";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      icon: LogoIcon,
      structure: (S) =>
        S.list()
          .title("base")
          .items([
            S.listItem()
              .title("Main Menu")
              .child(
                S.list()
                  .title("Main Menu Documents")
                  .items([
                    S.documentTypeListItem("food"),
                    S.documentTypeListItem("drink"),
                    S.documentTypeListItem("weeklySpecial"),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("Menu Description (Home)")
              .child(
                S.document()
                  .schemaType("homeMenuDescription")
                  .documentId("homeMenuDescription")
              ),
            S.listItem()
              .title("About Us (Home)")
              .child(
                S.document()
                  .schemaType("aboutUsHomePage")
                  .documentId("aboutUsHomePage")
              ),
            S.divider(),
            S.listItem()
              .title("About Page")
              .child(
                S.list()
                  .title("About Page Documents")
                  .items([
                    S.documentTypeListItem("theTeam"),
                    S.listItem()
                      .title("Story")
                      .child(
                        S.document()
                          .schemaType("ourStory")
                          .documentId("ourStory")
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("Contact Information")
              .child(
                S.document()
                  .schemaType("contactInformation")
                  .documentId("contactInformation")
              ),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  "food",
                  "drink",
                  "weeklySpecial",
                  "homeMenuDescription",
                  "aboutUsHomePage",
                  "contactInformation",
                  "ourStory",
                  "theTeam",
                ].includes(listItem.getId())
            ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
    iconify(),
  ],
});
