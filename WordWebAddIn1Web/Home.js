
"use strict";
(function () {

    //var messageBanner;

    // The initialize function must be run each time a new page is loaded.
    Office.onReady(function () {
        // Office is ready
        console.log("Office Ready");
        $(document).ready(function () {
            /*
            // Initialize the notification mechanism and hide it
            var element = document.querySelector('.MessageBanner');
            messageBanner = new components.MessageBanner(element);
            messageBanner.hideBanner();*/
            $('#btnCopyQr').click(copyToDoc);
            console.log("Doc ready. copyToDoc() set as click event handler");
        });
    });    

    function copyToDoc() {
        console.log("in copyToDoc");
        Word.run(function (context) {
            // Create a proxy object for the document body.
            var theDocBody = context.document.body;
            // Queue a command to insert text at the end of the document body.
            theDocBody.insertText("Text inserted via button.", Word.InsertLocation.end); //Word.InsertLocation.after ?
            // Synchronize the document state by executing the queued commands,
            // and return a promise to indicate task completion.
            return context.sync().then(function () {
                console.log('Text added');
            });
        }
        )
            .catch(function (error) {
                console.log('Error: ' + JSON.stringify(error));
                if (error instanceof OfficeExtension.Error) {
                    console.log('Debug info: ' + JSON.stringify(error.debugInfo));
                }
            });
    }
    /*
    //$$(Helper function for treating errors, $loc_script_taskpane_home_js_comment34$)$$
    function errorHandler(error) {
        // $$(Always be sure to catch any accumulated errors that bubble up from the Word.run execution., $loc_script_taskpane_home_js_comment35$)$$
        showNotification("Error:", error);
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    }

    // Helper function for displaying notifications
    function showNotification(header, content) {
        $("#notification-header").text(header);
        $("#notification-body").text(content);
        messageBanner.showBanner();
        messageBanner.toggleExpansion();
    }
    */
})();
