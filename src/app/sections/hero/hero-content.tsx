import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { UiCard } from '@uireact/card';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing } from '@uireact/foundation';
import { UiReactViewRotating, UiReactTapScaleDown, UiReactHoverElevate } from '@uireact/framer-animations';
import { UiIcon } from '@uireact/icons';
import { UiText, UiHeading, UiButtonLink } from '@uireact/text';

import NextLogo from '../../../../public/next.svg';
import styles from './hero.module.scss';

export const HeroContent = () => {
    return (
        <>
            <UiFlexGrid gap='four' alignItems='center'>
                <UiFlexGridItem grow={1}>
                    <h1 className={styles.heroContentTitle}>Ready to launch!</h1>
                </UiFlexGridItem>
                <UiIcon icon="SettingsBig" size='xlarge' motion={UiReactViewRotating} category='tertiary' />
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
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <Image src={NextLogo} width="100" height="20" alt="NextJS icon" />
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <Link href="https://uireact.io" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <UiHeading>@UiReact</UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <Link href="https://vercel.com" target='_blank'>
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <UiHeading>Deploy to Vercel </UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </Link>
                    <UiText>Use your device's settings to change theme appearance.</UiText>
                </UiFlexGrid>
                <UiFlexGrid gap='five' direction='column'>
                    <UiText fontStyle='bold'>@UiReact useful links:</UiText>
                    <UiButtonLink padding={{ block: 'four'}}>
                        <Link href="https://uireact.io/create-theme" target='_blank'>
                            <UiFlexGrid gap='four'>
                                <UiIcon icon='Layers' />
                                Create your theme
                            </UiFlexGrid>
                        </Link>
                    </UiButtonLink>
                    <UiButtonLink padding={{ block: 'four'}}>
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
