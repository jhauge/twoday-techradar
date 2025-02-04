import { defineField, defineType } from "sanity";

export const techType = defineType({
  name: "TechType",
  title: "Tech type",
  type: "document",
  fields: [
    defineField({
        name: "name",
        type: "string",
        validation: (Rule) => Rule.required()
    }),
    defineField({
        name: "ring",
        type: "string",
        validation: (Rule) => Rule.required(),
        options: {
            list: ["Adopt", "Trial", "Assess", "Hold"]
        }
    }),
    defineField({
        name: "quadrant",
        type: "string",
        validation: (Rule) => Rule.required(),
        options: {
            list: ["Techniques", "Platforms", "Tools", "Languages & Frameworks"]
        }
    }),
    defineField({
        name: "isNew",
        title: "Is this new to the radar?",
        type: "boolean",
        
    }),
    defineField({
        name: "status",
        type: "string",
        validation: (Rule) => Rule.required(),
        options: {
            list: ["New", "Moved In", "Moved Out", "No Change"]
        }
    }),
    defineField({
        name: "description",
        type: "text",
        validation: (Rule) => Rule.required()
    }),
    defineField({
        name: "url",
        type: "url",
        validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          })
    })
  ],
});