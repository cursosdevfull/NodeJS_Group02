import Joi from '@hapi/joi';
import joi from '@hapi/joi';

const schemas = {
  POST_INSERT: {
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      roles: Joi.array().required(),
    }),
  },
};

export default schemas;
