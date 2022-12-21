import styled from 'styled-components'
import ContentItem from '../Components/UI/Carousel/ContentItem';
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: "center";
    flex-direction: row;
    height: 100vh;
`;

const TopContainer = styled.div`
    position: relative;
    flex-basis: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: center; 
    flex-wrap: wrap;
    width: 100%;
    height: 56.25vw;
    max-height: calc(100vh - 169px);
    min-height: 480px;
    background: #000;
`;

const VideoContainer = styled.div`
    height: auto;
    width: 100%;
`;

const Title = styled.h1`
    color: var(--text);
    margin: 0;
`;

const Text = styled.p`
    color: var(--text);
`;

const ContentContainer = styled.div`
    flex-basis: 100%;
    display: flex; 
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin : 0 5%;
    gap: 10px;
`;

const MainContent = styled.div`
    flex-basis: 75% ;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 100%;

    @media (max-width: 1100px) {
        flex-basis: 100%;
    }
`

const SuggestedContent = styled.div`
    flex-basis: 24% ;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    padding: 0.5rem 0;

    @media (max-width: 1100px) {
        flex-basis: 100%;
        padding: 0;
    }
`;

const VideoDetails = styled.div`
    flex-basis: 100% ;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 165px;
    overflow: hidden;
`;

const Description = styled.p`
    color: var(--text);
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    white-space: normal;
    display: -webkit-box !important;
`;

function VideoScreen(){
    return(
        <Container>
            <TopContainer>
                <VideoContainer>
                    <VideoPlayer/>
                </VideoContainer>
            </TopContainer>
            <ContentContainer>
                <MainContent>
                    <VideoDetails>
                        <Title>Hello world this is a video</Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Description>
                    </VideoDetails>
                </MainContent>
                <SuggestedContent>
                    <ContentItem/>
                    <ContentItem/>
                    <ContentItem/>
                </SuggestedContent>
            </ContentContainer>
        </Container>
    )
}

export default VideoScreen