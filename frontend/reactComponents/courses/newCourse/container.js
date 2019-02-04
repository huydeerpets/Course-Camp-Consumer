import { Container } from 'unstated';
import { Methods } from './containerMethods/index';

class NewCourseContainer extends Container {
  state = {
    currentStep: 0,
    fileAdded: false,
    uploading: false,
    title: '',
    description: '',
    price: '',
    fileLocation: '',
    color: '',
    category: '',
    learning: [],
    learningTerm: '',
    language: 'English',
    isSavingCourse: false,
    summary: ''
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
  nextStep = () => Methods.moveStep.callNextStep(this);
  prevStep = () => Methods.moveStep.callPrevStep(this);
  onNumberFieldBlur = props => Methods.numberFieldFunctions.callNumberFieldBlur(this, props);
  onNumberFieldChange = e => Methods.numberFieldFunctions.callNumberFieldChange(this, e);
  handleUpload = async (info, token, navbarContainer) => Methods.handleUpload.callHandleUpload(this, info, token, navbarContainer);
  saveCourse = async (token, navbarContainer, auth) => Methods.saveCourse.callSaveCourse(this, token, navbarContainer, auth);
  addNewLearning = e => Methods.addNewLearning.callAddNewLearning(this, e);
  removeNewLearning = removedLearning => Methods.removeNewLearning.callRemoveNewLearning(this, removedLearning);
  setGlobalState = localCourseState => Methods.setGlobalState.callSetGlobalState(this, localCourseState);
}

export default NewCourseContainer;
