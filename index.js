/**
 * https://www.nnn.ed.nico/courses/n/chapters/n で使用するとそのChapterの情報を返します。
 * @returns {Object}
 */
module.exports.getChapterDetail = function () {
    return JSON.parse(
        document
            .querySelector('div[data-react-class="App.Chapter"][data-react-props]')
            .dataset.reactProps
    );
};
