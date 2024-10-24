const AppPermissions = {
  view: "view",
  edit: "edit",
  approve: "approve",
  manage: "manage",
  delete: "delete",
};
const AppsList = {
  slack: "slack",
  figma: "figma",
  confluence: "confluence",
  msOffice: "msOffice",
  hubspot: "hubspot",
  adobe: "azure",
  github: "github",
};
const usersData = [
  {
    id: 1,
    account: {
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Ravi Teja",
      email: "raviteja@gmail.com",
    },
    role: "Employee",
    designation: "Sr. Software Engineer",
    applications: [
      {
        application: {
          name: "figma",
        },
        attachedPolicy: "Default",
        key: "figma",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "slack",
        },
        attachedPolicy: "Default",
        key: "slack",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "confluence",
        },
        attachedPolicy: "Default",
        key: "confluence",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "msOffice",
        },
        attachedPolicy: "Default",
        key: "msOffice",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "hubspot",
        },
        attachedPolicy: "Default",
        key: "hubspot",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "adobe",
        },
        attachedPolicy: "Default",
        key: "adobe",
        permissions: ["view", "edit", "approve"],
      },
      {
        application: {
          name: "github",
        },
        attachedPolicy: "Default",
        key: "github",
        permissions: ["view", "edit", "approve"],
      },
    ],
    groups: ["Voyage", "Platform Nx", "Error Nx", "Engage"],
    createdOn: new Date("02/10/2024").toLocaleDateString(),
  },
  {
    id: 2,
    account: {
      name: "Brq",
      email: "raviteja@gmail.com",
    },
    role: "Employee",
    designation: "Sr. Software Engineer",
    applications: [],
    groups: [],
    createdOn: new Date("02/10/2024").toLocaleDateString(),
  },
];
module.exports = {
  AppPermissions,
  AppsList,
  usersData,
};