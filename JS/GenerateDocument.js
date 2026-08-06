function processContacts(primaryControl) {

    var formContext = primaryControl;
    var recordId = formContext.data.entity.getId();

    recordId = recordId.replace("{", "").replace("}", "");

    var flowUrl = "https://4eb31ccf2e21e4ccb0fe5f9dcf2a60.ae.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/06/workflows/4a91400f4e8c4243ada2c58ac8290974/triggers/manual/paths/invoke?api-version=1";

    var payload = {
        ContactImportId: recordId
    };

    var req = new XMLHttpRequest();
    req.open("POST", flowUrl, true);
    req.setRequestHeader("Content-Type", "application/json");

    req.onreadystatechange = function () {

        if (req.readyState === 4) {

            req.onreadystatechange = null;

            if (req.status === 200 || req.status === 202) {

                Xrm.Navigation.openAlertDialog({
                    text: "Contact processing started."
                });

            } else {

                Xrm.Navigation.openErrorDialog({
                    message: "Error starting contact processing. Status: " + req.status
                });

                console.log(req.responseText);
            }
        }
    };

    req.send(JSON.stringify(payload));
}