import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://ddsa.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "u1021uVTglNY",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "IrAC4FAyBx7Z",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "rBd2xX1gtN3g",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "e9gs2J313yEo",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "-xVykXc0I9dA",
    },
    firstName: { type: "string", storageKey: "Qqaajfd_yqRP" },
    googleImageUrl: { type: "url", storageKey: "JPR6_pjUqER0" },
    googleProfileId: { type: "string", storageKey: "SIatK3x7viUR" },
    lastName: { type: "string", storageKey: "My0WWkO2yX3B" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "eNRAN6FZ9uiB",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "p8jQ9FW2UzPS",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "FXSI6gKaWCfb",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "TAzfRNYVfXrh",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "4fj8arpQOF-E",
    },
  },
};
