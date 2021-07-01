module.exports.getChapterDetail = function () {
    return JSON.parse(
        document
            .querySelector('div[data-react-class="App.Chapter"][data-react-props]')
            .dataset.reactProps
    )
};
