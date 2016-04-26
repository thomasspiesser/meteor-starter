// JSX files have to import react
import React from 'react';
// Import react mounter instead of react-layout (npm)
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Import components used by the router
import Layout from '../../ui/layouts/Layout.jsx';
import Index from '../../ui/pages/Index.jsx';

// Group public routes
const router = FlowRouter.group({});

// Define index route
router.route('/', {
  name: 'index',
  action() {
    // Render Layout component and inject Index component
    // as props.content
    mount(Layout, { content: <Index/> });
  },
});
