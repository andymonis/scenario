CUSHON 
======

A sample project by Andy Monis 2025

# Run

```
npm run dev
```

# Design 

Please refer to the separate PDF for ./design/Cushon.pdf for design, documentation, considerations etc. 

# Project

The aim of this project is to scaffold a simple project that lays the ground works for future expansion as a multi-developer project. It is purposefully very light, with few external dependecies to create a lean and mean app. 

From experience of green field projects, they typically go wrong early on because there has been insufficent focus on design and structure. I spent half of the allocated time on the design aspect and half on this project focusing on a correctly integrated model and page flow. 

The project uses Redux as the model which also handles the navigation. The reason for this is that as work flows become complex and have multiple dependencies, simply using url navigation fails, where as Redux allows greater control via the reducers which can validate the model before any transactions are committed. 

I have scaffolded out the Pages from the design "happy path" which can now be worked on independently or jointly by a team. Security can also be easily added to the model with state management and rememberme etc. 

# Next Steps

* Testing framework in project
* Authentication & Security
* Apply branding
* Design and implement "UnHappy Paths" 
* Componentise the assets (Cards, Lozenges etc)

Please refer to the Stories in the design PDF for more considerations regarding the productionisation of this project. 


