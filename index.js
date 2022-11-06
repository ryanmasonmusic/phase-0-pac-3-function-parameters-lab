function introduction(string) {
    const Hello = "Hi, my name is";
    const name = string
    let fullIntroduction = `${Hello} ${name}.`
    return fullIntroduction
}
function introductionWithLanguage(name, language) {
    const hello = "Hi, my name is";
    const program = "and I am learning to program in";
    let introductionWithLanguage = `${hello} ${name} ${program} ${language}.`
    return introductionWithLanguage
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    const hello = "Hi, my name is";
    const program = "and I am learning to program in";
    let introductionWithLanguageOptional = `${hello} ${name} ${program} ${language}.`
    return introductionWithLanguageOptional
}