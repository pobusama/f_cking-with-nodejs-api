exports.getModuleInfo = () => {
    return {
        filename: module.filename,
        id: module.id,
        loaded: module.loaded,
        parent: module.parent,
        paths: module.paths,
        moduleSelf: module
    }
}