
import styled from 'styled-components';
export const SplitScreen = ({ children,leftWeight=1, rightWeight=1})=>{

const Container = styled.div`
display:flex;
`;

const Pane = styled.div`
flex:${props=> props.weight};
`;

const [left, right] = children;

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}