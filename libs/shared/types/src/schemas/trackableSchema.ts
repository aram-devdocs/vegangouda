import Joi from 'joi';
import { Trackable } from '../constants';

export const trackableSchema = Joi.object(Trackable)
  .meta({ className: 'Trackable' })
  .label('Trackable');
