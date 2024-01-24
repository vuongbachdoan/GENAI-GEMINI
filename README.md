### Folder structure

- config
    - router
        - AppRouting.jsx
    - theme
        - css
            - default.css
        - darkmode
            - ColorModeSwitcher.js
- core
    - layout
        - AboutUsLayout.jsx
        - AppLayout.jsx
    - services
        - apiUser.js
    - store
        - user
            - profileData.js
        - index.js
- helper
- hooks
- mocks
- pages
    - AboutUs
        - index.jsx
    - Home
        - components
            - ExampleComponent.jsx
        - index.jsx
- App.jsx
- index.js


### How to run

    yarn install
    yarn start


### Explain

- config, core: main script of project, infrequently change
- helper: validate, logic script
- hooks: temporary data
- pages: UI components