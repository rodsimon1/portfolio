import styled from 'styled-components';

export const ProfilePictureContainer = styled.div`
  /* text-align: center; */
  /* border: 1px solid red; */
`;

export const ProfilePicture = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
  overflow: visible;
  border-radius: 70px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px #212d45;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
