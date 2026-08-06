function toggleDocumentTabs(executionContext) {
	console.warn("✅ oh_Document_TabVisibility loaded");
	var formContext = executionContext.getFormContext();

	toggleTab(formContext, "TabSignOff", "oh_includesignoff");
	toggleTab(formContext, "TabServers", "oh_includesnowservers");
	toggleTab(formContext, "TabSMACCSettings", "oh_includesmaccsettings");
	toggleTab(formContext, "TabSnowAgents", "oh_includesnowagents");
	toggleTab(formContext, "TabAtlasSettings", "oh_includeatlasplatformsettings");
	toggleTab(formContext, "TabAdditionalModules", "oh_includeadditionalmodules");
	toggleTab(formContext, "TabSIMConnectors", "oh_includesimconnectors");
	toggleTab(formContext, "TabUsers", "oh_includeusers");
	toggleTab(formContext, "TabCurrency", "oh_includecurrencymanagement");
	toggleTab(formContext, "TabHCAdvice", "oh_includehealthcheckadvice");
	toggleTab(formContext, "TabCustomer", "oh_includecustomeroverview");
	toggleTab(formContext, "TabPlatformUtil", "oh_includeplatformutilisation");

	console.warn(formContext);
}

function toggleTab(formContext, tabName, fieldName) {
	var tab = formContext.ui.tabs.get(tabName);
	if (!tab) {
		console.warn("Tab not found:", tabName);
		return;
	}

	var attribute = formContext.getAttribute(fieldName);
	if (!attribute) {
		console.warn("Field not found:", fieldName);
		return;
	}

	var value = attribute.getValue();
	tab.setVisible(value === true);
}
