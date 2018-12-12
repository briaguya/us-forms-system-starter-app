import Introduction from "../components/Introduction.jsx";
import PlaceholderDisplayWidget from "../components/PlaceholderDisplayWidget.jsx";

const formConfig = {
  title: "Form",
  subTitle: "Test",
  formId: "",
  urlPrefix: "/",
  trackingPrefix: "form-",
  transformForSubmit: "",
  submitUrl: "",
  introduction: Introduction,
  confirmation: "",
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: "First Chapter",
      pages: {
        firstPage: {
          path: "first-chapter/first-page",
          title: "First Page",
          schema: {
            type: "object",
            properties: {
              arrayOfThings: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    thing: {
                      type: "string",
                      enum: ["firstCommon", "secondCommon", "other"],
                      enumNames: [
                        "First common option",
                        "Second common option",
                        "Other"
                      ]
                    },
                    otherThing: { type: "string" }
                  }
                }
              }
            }
          },
          uiSchema: {
            arrayOfThings: {
              "ui:options": {
                viewField: PlaceholderDisplayWidget,
                addable: true
              }
            }
          }
        }
      }
    }
  }
};

export default formConfig;
