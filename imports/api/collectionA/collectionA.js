import { Mongo } from 'meteor/mongo';

export const CollectionA = new Mongo.Collection('collectionA');

CollectionA.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the doc.',
  },
});

CollectionA.attachSchema(CollectionA.schema);