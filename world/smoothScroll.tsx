// Usage: <button onClick={ smoothScroll }> </button>

export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault(); // prevent the default behavior
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
