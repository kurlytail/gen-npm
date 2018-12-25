import { parseOptions, generate } from '@kurlytail/gen-lib';
import map from './map';

parseOptions();
generate(map);
