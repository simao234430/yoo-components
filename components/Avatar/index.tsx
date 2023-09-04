import Avatar from './avatar';
import Group from './group';
import './style'

export * from './interface';

type AvatarComponentType = typeof Avatar & {
  Group: typeof Group;
};

const AvatarComponent = Avatar as AvatarComponentType;
AvatarComponent.Group = Group;

export default AvatarComponent;
