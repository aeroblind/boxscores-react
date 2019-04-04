import styled from 'styled-components';

export default styled.div`
  padding: ${props => props.padding || '10px'};
  margin: ${props => props.margin || '0'};
  box-shadow: ${props => props.boxShadow ? '0 0 5px 1px rgba(0, 0, 0, .25)' : '0'};
  overflow: ${props => props.overflow || 'hidden'};
  font-family: ${props => props.fontFamily || ''};
  font-size: ${props => props.fontSize || '16px'};
  background-color: ${props => props.backgroundColor || ''};
  border-radius: ${props => props.borderRadius || ''};
  overflow: ${props => props.overflow || 'hidden'};
`;