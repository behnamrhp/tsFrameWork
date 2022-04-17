# how to use

for every component should create model Class and View Class like src/views/UserForm.ts file for view and src/models/User.ts for model

## for model of component 
- shoudl create method like buildUser for every child component data 
- this method shoud init Attributes Class for start data and get and set data
- Events for add event like data change
- Sync for fetch and save from api for this component

## every component that extends from View should have :
- template method for render
- eventsMap with example define events
- regionsMap defines elements of component
- use this.model.set to add or update model of component
- use this.model.save to save model of component
- use this.model.get to get model data of component

## for read and render component 
- after define View and Model of component based on above methods should render component like index.ts file
