import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Home from ".";

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
};

describe("<Home />", () => {
  it("should render section elements", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /fallow us/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("img", { name: /won games/i })).toHaveLength(2);

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /upcoming/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);

    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
  });
});
