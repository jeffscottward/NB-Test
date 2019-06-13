export default {
  css: {
    formElementSize: "40px",
    activeColor: "#1498BE",
    formInputBgColor: "#F7F8F8",
    formInputBorderColor: "#979797",
    formButtonBgColor: "#28B4D3",
    formDropDownBorderColor: "#E7E7E7",
    formArrowDefaultColor: "#E7E7E7",
    tabElementInactiveFontColor: "#666666",
    defaultShadow: "0px 1px 3px 0px #000",
    pageBgColor: "#EAEBED",
    gridRowHoverColor: "#FAFDFE",
    divider: "2px solid #eff3f4",
    sideBarFontColor: "#C2C2C2"
  },
  siteMap: {
    pages: {
      Dashboard: [],
      People: [],
      Website: [],
      Communication: [],
      Finances: [],
      Nations: [],
      Settings: {
        "Your Account": [],
        Contact: [],
        Defaults: {
          Basics: [],
          "Custom Fields": {
            People: {
              title: "Sharing custom field settings",
              subTitle:
                "You are sharing custom field settings. All custom fields you create will automatically become avaialble to your networked nations.",
              formFields: {
                textInputs: [
                  {
                    label: "Name",
                    required: true,
                    placeHolder: "",
                    note: ""
                  },
                  {
                    label: "Slug",
                    required: true,
                    placeHolder: "",
                    note:
                      "Choose carefully, for data integrity reasons, this cannot be changed later"
                  }
                ],
                dropDowns: [
                  {
                    label: "Field Type",
                    required: true,
                    options: ["Text", "Checkbox"]
                  }
                ]
              },
              table: [
                {
                  name: "Nation slug",
                  slug: "nationslug",
                  type: "Text",
                  '': '▾'
                },
                {
                  name: "DNS providor",
                  slug: "dns_providor",
                  type: "Text",
                  '': '▾'
                },
                {
                  name: "Web designer",
                  slug: "web_designer",
                  type: "Checkbox",
                  '': '▾'
                }
              ]
            },
            Donations: {}
          },
          "Social Capital": [],
          "Finance types": [],
          Dashboards: [],
          "Permission sets": [],
          Unsubscribe: []
        },
        Political: [],
        Domains: [],
        "Payment processors": [],
        Apps: [],
        Developer: [],
        Database: [],
        Privacy: []
      }
    }
  }
};