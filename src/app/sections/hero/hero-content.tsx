import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

import { UiCard } from '@uireact/card';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing } from '@uireact/foundation';
import { UiReactViewRotating, UiReactTapScaleDown, UiReactHoverElevate } from '@uireact/framer-animations';
import { UiIcon } from '@uireact/icons';
import { UiText, UiHeading, UiButtonLink } from '@uireact/text';

import NextLogo from '../../../../public/next.svg';

const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const HeroContent = () => {
    return (
        <>
            <UiFlexGrid gap='four' alignItems='center'>
                <UiFlexGridItem grow={1}>
                    <Title>Ready to launch!</Title>
                </UiFlexGridItem>
                <UiIcon icon="SettingsBig" size='xlarge' motion={UiReactViewRotating} />
            </UiFlexGrid>
            <UiSpacing padding={{ block: 'five' }}>
                <UiText size='small'>
                    This is a working project powered by <UiText fontStyle='bold' inline>NextJS</UiText>, 
                    <UiText fontStyle='bold' inline> Styled-components</UiText> completed configured and 
                    <UiText fontStyle='bold' inline> @UiReact</UiText> wrapping completely done.
                </UiText>
            </UiSpacing>
            <UiFlexGrid gap='seven' direction='column'>
                <UiFlexGrid gap='five' direction='column'>
                    <UiText fontStyle='bold'>Docs:</UiText>
                    <Link href="https://nextjs.org/" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between'>
                                <Image src={NextLogo} width="100" height="20" alt="NextJS icon" />
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <Link href="https://uireact.io" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between'>
                                <UiHeading>@UiReact</UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <Link href="https://styled-components.com" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between'>
                                <UiHeading>Styled-components {`<💅🏾>`} </UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <Link href="https://vercel.com" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between'>
                                <UiHeading>Deploy to Vercel </UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                </UiFlexGrid>
                <UiFlexGrid gap='five' direction='column'>
                    <UiText fontStyle='bold'>@UiReact useful links:</UiText>
                    <UiButtonLink>
                        <Link href="https://uireact.io/create-theme" target='_blank'>
                            <UiFlexGrid gap='four'>
                                <UiIcon icon='Layers' />
                                Create your theme
                            </UiFlexGrid>
                        </Link>
                    </UiButtonLink>
                    <UiButtonLink>
                        <Link href="https://github.com/inavac182/uireact/discussions" target='_blank'>
                            <UiFlexGrid gap='four'>
                                <UiIcon icon='Question' />
                                Questions
                            </UiFlexGrid>
                        </Link>
                    </UiButtonLink>
                </UiFlexGrid>
            </UiFlexGrid>
        </>
    )
};
