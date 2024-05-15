'use client';
import React from 'react';
import Image from 'next/image';

import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { useViewport } from '@uireact/foundation';

import { GradientBg, Waves } from './components';
import styles from './hero.module.scss';
import { HeroContent } from './hero-content';
import icon from '../../../../public/sunglasses_cat.gif';
import nextIcon from '../../../../public/next.svg';

export const Hero = () => {
    const { isSmall } = useViewport();

    return (
        <>
            <GradientBg />
            <div className={styles.hero}>
                <UiFlexGrid direction={isSmall ? 'column' : 'row'} className={styles.heroGrid}>
                    <UiFlexGridItem>
                        <div className={styles.heroTitle}>
                            <HeroContent />                            
                        </div>
                    </UiFlexGridItem>
                    <UiFlexGridItem grow={isSmall ? 1 : 2} order={isSmall ? 1 : 2}>
                        <UiFlexGrid className={styles.heroWavesContent} direction={isSmall ? 'column' : 'row'}>
                            <Waves />
                            <UiFlexGridItem grow={1} align='center'>
                                <div className={styles.heroIcons}>
                                    <Image src={nextIcon} width="200" height="100" alt="@UiReact icon" />
                                    <Image src={icon} width="100" height="100" alt="@UiReact icon" />
                                </div>
                            </UiFlexGridItem>
                        </UiFlexGrid>
                    </UiFlexGridItem>
                </UiFlexGrid>
            </div>
        </>
    );
};
