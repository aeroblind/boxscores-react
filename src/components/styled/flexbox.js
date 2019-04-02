import styled from 'styled-components';

export default styled.div`
  display: flex;
  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '0'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-grow: ${props => props.flexGrow || 0 };
  flex-direction: ${props => props.flexDirection || 'row' };
  margin: ${props => props.margin || '0' };
`;