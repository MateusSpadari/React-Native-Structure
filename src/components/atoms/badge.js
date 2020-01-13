import React from 'react';
import { Badge } from 'react-native-elements'

const DefaultBadge = ({value, status}) => (

  <Badge 
    value={value} 
    status={status} />

);

export default DefaultBadge;