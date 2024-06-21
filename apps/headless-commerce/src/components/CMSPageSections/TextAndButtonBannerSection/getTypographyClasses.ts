import { ComponentSizeType } from './ComponentSizeType';

export const getTypographyClasses = (componentSize: ComponentSizeType) => {
  let componentSizeTitleClass = '';
  let componentSizeDescriptionClass = '';

  switch (componentSize) {
    case ComponentSizeType.EXTRA_SMALL:
      componentSizeTitleClass = '';
      componentSizeDescriptionClass = 'title-02-light-sm title-03-light-lg';
      break;
    case ComponentSizeType.SMALL:
      componentSizeTitleClass = 'title-01-medium-sm quote-medium-lg';
      componentSizeDescriptionClass = 'body-light-sm title-03-light-lg';
      break;
    case ComponentSizeType.MEDIUM:
      componentSizeTitleClass = 'title-01-medium-sm quote-medium-lg';
      componentSizeDescriptionClass = 'title-03-light-sm body-light-lg';
      break;
    case ComponentSizeType.EXTRA_LARGE:
      componentSizeTitleClass = '';
      componentSizeDescriptionClass = 'title-02-regular-sm title-01-regular-lg';
      break;
    case ComponentSizeType.MEDIUM_SMALL:
      componentSizeTitleClass = 'title-01-medium';
      componentSizeDescriptionClass = 'body-light-sm title-03-desktop';
      break;
    default:
      componentSizeTitleClass = '';
      componentSizeDescriptionClass = '';
  }

  return { componentSizeTitleClass, componentSizeDescriptionClass };
};
