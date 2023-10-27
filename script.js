// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // todo: このままだと説明が消えるだけ
    function parseShortsURLs() {
        // Select the summary column element
        const summaryColumn = document.querySelector('div#description yt-formatted-string.content.style-scope.ytd-expandable-video-description-body-renderer');

        // Check if the summary column element exists
        if (summaryColumn) {
            // Regular expression to match URLs in the summary column
            const urlRegex = /(https?:\/\/[^\s]+)/g;

            // Replace plain URLs with clickable links
            summaryColumn.innerHTML = summaryColumn.innerHTML.replace(urlRegex, function(url) {
                return '<a href="' + url + '" target="_blank">' + url + '</a>';
            });
        }
    }

    // Call the function to parse and make URLs clickable
    parseShortsURLs();
});