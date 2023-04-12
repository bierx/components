import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';
import { COLORS } from './index';
import { readable, setLightness, transparentize } from './utils';

export default {
    title: 'Utils/Colors',
} as Meta;

const List = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  list-style: none;
`;

const ListItem = styled.li``;

const ColorTile = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  color: ${(props) => props.text ? props.text : props.color};
  border-radius: 12px;
  margin-bottom: 10px;
  outline: 1px solid ${(props) => props.text ? props.text : props.color};
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ColorName = styled.p`
  color: ${COLORS.GREY.SHADE_900.value};
  font-weight: 700;
  padding: 0;
  margin: 0 0 0 5px;
`;

const ColorCode = styled.p`
  color: ${COLORS.GREY.SHADE_600.value};
  padding: 0;
  margin: 0 0 0 5px;
  text-transform: uppercase;
`;

// @ts-ignore
interface TemplateProps {
    palette?: string;
}

const Template: Story<TemplateProps> = ({ palette }) =>
    <>
        {
            Object.values(palette).map((color, index) => <List key={index}>
                {Object.values(color as any).reverse().map((shade, shadeIndex) => <ListItem key={shadeIndex}>
                    <ColorTile color={shade.value} />
                    <ColorName>{shade.name}</ColorName>
                    <ColorCode>{shade.value}</ColorCode>
                </ListItem>)}
            </List>)
        }
    </>;

export const Palette = Template.bind({});
Palette.args = {
    palette: COLORS
};

export const Transparent = Template.bind({});
Transparent.args = {
    palette: {
        BLUE: {
            SHADE_400_08: transparentize(0.2, COLORS.BLUE.SHADE_400),
            SHADE_400_05: transparentize(0.5, COLORS.BLUE.SHADE_400),
            SHADE_400: COLORS.BLUE.SHADE_400,
        }
    }
};

export const Readable = ({ palette }) =>
    <>
        {
            Object.values(palette).map((color, index) => <List key={index}>
                {Object.values(color as any).reverse().map((shade, shadeIndex) => <ListItem key={shadeIndex}>
                    <ColorTile color={shade.bg.value} text={shade.readable.value}>
                        Text
                    </ColorTile>
                    <ColorName>{shade.bg.name}</ColorName>
                    <ColorCode>{shade.readable.name}</ColorCode>
                </ListItem>)}
            </List>)
        }
    </>;
Readable.args = {
    palette: {
        BLUE: [
            {
                bg: COLORS.BLUE.SHADE_100,
                readable: readable(COLORS, COLORS.BLUE.SHADE_100, COLORS.MISC.WHITE, COLORS.BLUE.SHADE_500),
            },
            {
                bg: COLORS.BLUE.SHADE_200,
                readable: readable(COLORS, COLORS.BLUE.SHADE_200, COLORS.MISC.WHITE, COLORS.BLUE.SHADE_500),
            },
            {
                bg: COLORS.BLUE.SHADE_300,
                readable: readable(COLORS, COLORS.BLUE.SHADE_300, COLORS.MISC.WHITE, COLORS.BLUE.SHADE_500),
            },
            {
                bg: COLORS.BLUE.SHADE_400,
                readable: readable(COLORS, COLORS.BLUE.SHADE_400, COLORS.MISC.WHITE, COLORS.BLUE.SHADE_500),
            },
            {
                bg: COLORS.BLUE.SHADE_500,
                readable: readable(COLORS, COLORS.BLUE.SHADE_500, COLORS.MISC.WHITE, COLORS.BLUE.SHADE_500),
            },
        ],
        PURPLE: [
            {
                bg: COLORS.PURPLE.SHADE_100,
                readable: readable(COLORS, COLORS.PURPLE.SHADE_100, COLORS.MISC.WHITE, COLORS.PURPLE.SHADE_500),
            },
            {
                bg: COLORS.PURPLE.SHADE_200,
                readable: readable(COLORS, COLORS.PURPLE.SHADE_200, COLORS.MISC.WHITE, COLORS.PURPLE.SHADE_500),
            },
            {
                bg: COLORS.PURPLE.SHADE_300,
                readable: readable(COLORS, COLORS.PURPLE.SHADE_300, COLORS.MISC.WHITE, COLORS.PURPLE.SHADE_500),
            },
            {
                bg: COLORS.PURPLE.SHADE_400,
                readable: readable(COLORS, COLORS.PURPLE.SHADE_400, COLORS.MISC.WHITE, COLORS.PURPLE.SHADE_500),
            },
            {
                bg: COLORS.PURPLE.SHADE_500,
                readable: readable(COLORS, COLORS.PURPLE.SHADE_500, COLORS.MISC.WHITE, COLORS.PURPLE.SHADE_500),
            },
        ],
        GREEN: [
            {
                bg: COLORS.GREEN.SHADE_100,
                readable: readable(COLORS, COLORS.GREEN.SHADE_100, COLORS.MISC.WHITE, COLORS.GREEN.SHADE_500),
            },
            {
                bg: COLORS.GREEN.SHADE_200,
                readable: readable(COLORS, COLORS.GREEN.SHADE_200, COLORS.MISC.WHITE, COLORS.GREEN.SHADE_500),
            },
            {
                bg: COLORS.GREEN.SHADE_300,
                readable: readable(COLORS, COLORS.GREEN.SHADE_300, COLORS.MISC.WHITE, COLORS.GREEN.SHADE_500),
            },
            {
                bg: COLORS.GREEN.SHADE_400,
                readable: readable(COLORS, COLORS.GREEN.SHADE_400, COLORS.MISC.WHITE, COLORS.GREEN.SHADE_500),
            },
            {
                bg: COLORS.GREEN.SHADE_500,
                readable: readable(COLORS, COLORS.GREEN.SHADE_500, COLORS.MISC.WHITE, COLORS.GREEN.SHADE_500),
            },
        ],
        YELLOW: [
            {
                bg: COLORS.YELLOW.SHADE_100,
                readable: readable(COLORS, COLORS.YELLOW.SHADE_100, COLORS.MISC.WHITE, COLORS.YELLOW.SHADE_500),
            },
            {
                bg: COLORS.YELLOW.SHADE_200,
                readable: readable(COLORS, COLORS.YELLOW.SHADE_200, COLORS.MISC.WHITE, COLORS.YELLOW.SHADE_500),
            },
            {
                bg: COLORS.YELLOW.SHADE_300,
                readable: readable(COLORS, COLORS.YELLOW.SHADE_300, COLORS.MISC.WHITE, COLORS.YELLOW.SHADE_500),
            },
            {
                bg: COLORS.YELLOW.SHADE_400,
                readable: readable(COLORS, COLORS.YELLOW.SHADE_400, COLORS.MISC.WHITE, COLORS.YELLOW.SHADE_500),
            },
            {
                bg: COLORS.YELLOW.SHADE_500,
                readable: readable(COLORS, COLORS.YELLOW.SHADE_500, COLORS.MISC.WHITE, COLORS.YELLOW.SHADE_500),
            },
        ],
        ORANGE: [
            {
                bg: COLORS.ORANGE.SHADE_100,
                readable: readable(COLORS, COLORS.ORANGE.SHADE_100, COLORS.MISC.WHITE, COLORS.ORANGE.SHADE_500),
            },
            {
                bg: COLORS.ORANGE.SHADE_200,
                readable: readable(COLORS, COLORS.ORANGE.SHADE_200, COLORS.MISC.WHITE, COLORS.ORANGE.SHADE_500),
            },
            {
                bg: COLORS.ORANGE.SHADE_300,
                readable: readable(COLORS, COLORS.ORANGE.SHADE_300, COLORS.MISC.WHITE, COLORS.ORANGE.SHADE_500),
            },
            {
                bg: COLORS.ORANGE.SHADE_400,
                readable: readable(COLORS, COLORS.ORANGE.SHADE_400, COLORS.MISC.WHITE, COLORS.ORANGE.SHADE_500),
            },
            {
                bg: COLORS.ORANGE.SHADE_500,
                readable: readable(COLORS, COLORS.ORANGE.SHADE_500, COLORS.MISC.WHITE, COLORS.ORANGE.SHADE_500),
            },
        ],
        RED: [
            {
                bg: COLORS.RED.SHADE_100,
                readable: readable(COLORS, COLORS.RED.SHADE_100, COLORS.MISC.WHITE, COLORS.RED.SHADE_500),
            },
            {
                bg: COLORS.RED.SHADE_200,
                readable: readable(COLORS, COLORS.RED.SHADE_200, COLORS.MISC.WHITE, COLORS.RED.SHADE_500),
            },
            {
                bg: COLORS.RED.SHADE_300,
                readable: readable(COLORS, COLORS.RED.SHADE_300, COLORS.MISC.WHITE, COLORS.RED.SHADE_500),
            },
            {
                bg: COLORS.RED.SHADE_400,
                readable: readable(COLORS, COLORS.RED.SHADE_400, COLORS.MISC.WHITE, COLORS.RED.SHADE_500),
            },
            {
                bg: COLORS.RED.SHADE_500,
                readable: readable(COLORS, COLORS.RED.SHADE_500, COLORS.MISC.WHITE, COLORS.RED.SHADE_500),
            },
        ],
        GREY: [
            {
                bg: COLORS.GREY.SHADE_100,
                readable: readable(COLORS, COLORS.GREY.SHADE_100, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_200,
                readable: readable(COLORS, COLORS.GREY.SHADE_200, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_300,
                readable: readable(COLORS, COLORS.GREY.SHADE_300, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_400,
                readable: readable(COLORS, COLORS.GREY.SHADE_400, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_500,
                readable: readable(COLORS, COLORS.GREY.SHADE_500, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_600,
                readable: readable(COLORS, COLORS.GREY.SHADE_600, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_700,
                readable: readable(COLORS, COLORS.GREY.SHADE_700, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_800,
                readable: readable(COLORS, COLORS.GREY.SHADE_800, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            },
            {
                bg: COLORS.GREY.SHADE_900,
                readable: readable(COLORS, COLORS.GREY.SHADE_900, COLORS.MISC.WHITE, COLORS.GREY.SHADE_700),
            }
        ],
    }
};

export const SetLightness = Template.bind({});
SetLightness.args = {
    palette: {
        BLUE: {
            SHADE_500_10: setLightness(0.1, COLORS.BLUE.SHADE_500),
            SHADE_500_45: setLightness(0.45, COLORS.BLUE.SHADE_500),
            SHADE_500: COLORS.BLUE.SHADE_500,
        }
    }
};