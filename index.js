module.exports = {
    specialCharRemove: function (str) {
        return str.replace(/[^a-zA-Z ]/g, " ");
    },
    spaceToUnderscore: function (str) {
        return str.replace(/ /g, "_");
    },
    upperCase: function (str) {
        return str.toUpperCase();
    }
};