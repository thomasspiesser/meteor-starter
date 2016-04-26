import { Mongo } from 'meteor/mongo';

export const CollectionB = new Mongo.Collection('collectionB');

CollectionB.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the doc.',
  },
});

CollectionB.attachSchema(CollectionB.schema);
