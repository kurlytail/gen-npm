import { getDesign } from '@kurlytail/gen-lib';

const design = getDesign();

const generatorMap = {
    [design.project]: {
        '.editorconfig': {
            template: 'templates/.editorconfig._',
            object: design
        },
        '.eslintignore': {
            template: 'templates/.eslintignore._',
            object: design
        },
        '.eslintrc.js': {
            template: 'templates/.eslintrc.js._',
            object: design
        },
        '.gitignore': {
            template: 'templates/.gitignore._',
            object: design
        },
        '.npmignore': {
            template: 'templates/.npmignore._',
            object: design
        },
        '.prettierrc': {
            template: 'templates/.prettierrc',
            object: design
        },
        Jenkinsfile: {
            template: 'templates/Jenkinsfile._',
            object: design
        },
        'package.json': {
            template: 'templates/package.json._'
        },
        'README.md': {
            template: 'templates/README.md._',
            object: design
        },
        'webpack.config.js': {
            template: 'templates/webpack.config.js._',
            object: design
        },
        src: {
            js: {
                'index.js': {
                    template: 'templates/index.js',
                    object: design
                }
            }
        }
    }
};

export default generatorMap;
