export const Methods = {
  updateState: require('./misc/updateState'),
  addNewSection: require('./sections/addNewSection'),
  deleteSection: require('./sections/deleteSection'),
  setInitialStateFromData: require('./misc/setInitialStateFromData'),
  changeCurrentActiveSection: require('./sections/changeCurrentActiveSection'),
  updateSectionDetails: require('./sections/updateSectionDetails'),
  handleSectionVideoUpload: require('./sections/handleSectionVideoUpload'),
  deleteAddedVideo: require('./videos/deleteAddedVideo'),
  updateVideoDetails: require('./videos/updateVideoDetails'),
  saveAddQuizQuestion: require('./drawers/addQuiz/saveAddQuizQuestion'),
  editAddQuizAddedAnswer: require('./drawers/addQuiz/editAddQuizAddedAnswer'),
  editAddQuizAddingNewAnswer: require('./drawers/addQuiz/editAddQuizAddingNewAnswer'),
  deleteAddQuizQuestion: require('./drawers/addQuiz/deleteAddQuizQuestion'),
  savePictureQuizQuestion: require('./drawers/addPictureQuiz/savePictureQuizQuestion'),
  deleteAddPictureQuizQuestion: require('./drawers/addPictureQuiz/deleteAddPictureQuizQuestion'),
  editAddPictureQuizAddedAnswer: require('./drawers/addPictureQuiz/editAddPictureQuizAddedAnswer'),
  editAddPictureQuizAddingNewAnswer: require('./drawers/addPictureQuiz/editAddPictureQuizAddingNewAnswer')
};
