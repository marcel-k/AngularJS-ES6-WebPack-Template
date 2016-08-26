const AppComponent = {
    template: `
    <fieldset>
        <legend>App component</legend>
        <app-nav></app-nav>
        <app-header>
        </app-header>
        <div>
            <div ui-view></div>
        </div> 
    </fieldset> 
  `
};

export default AppComponent;