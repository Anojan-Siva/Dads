import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "listing" model, go to https://ddsa.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "pu_RanED-Ql8",
  comment:
    "The listing model stores service or item listings associated with users. It includes fields for title, description, type, and a relationship to the user who created it.",
  fields: {
    cost: { type: "string", storageKey: "WyHHpQRmPf1-" },
    description: {
      type: "string",
      validations: {
        required: true,
        stringLength: { min: null, max: 2000 },
      },
      storageKey: "pu_RanED-Ql8-description",
    },
    free: {
      type: "boolean",
      default: true,
      storageKey: "jUE1U_0_Y9mQ",
    },
    image: {
      type: "url",
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      storageKey: "kVkVf8q_YEC3",
    },
    title: {
      type: "string",
      validations: {
        required: true,
        stringLength: { min: null, max: 80 },
      },
      storageKey: "pu_RanED-Ql8-title",
    },
    user: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "user" },
      storageKey: "pu_RanED-Ql8-user",
    },
  },
};
