import type { Struct, Schema } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'monitor';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.String;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'slideshow';
  };
  attributes: {
    projectName: Schema.Attribute.String;
    projectLink: Schema.Attribute.String;
    projectDesc: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    schoolName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    endD: Schema.Attribute.String;
    major: Schema.Attribute.String;
    address: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
      'projects.projects': ProjectsProjects;
      'education.education': EducationEducation;
    }
  }
}
