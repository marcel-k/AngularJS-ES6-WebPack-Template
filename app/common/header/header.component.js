/**
 * Stateless component, does not fetch dat itself but receives it via bindings, mutates it and outputs it through events if neccessary.
 */
const HeaderComponent = {
    //bindings:{},
    //controller,
    template: `
    <fieldset>
        <legend>Header component</legend>
        <header>
            <h3>This header is part of the layout (app component template) and will be visible on every page</h3>
        </header>
    </fieldset>`
};

export default HeaderComponent;