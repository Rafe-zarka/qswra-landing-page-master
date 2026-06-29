/**
 * Scrolls smoothly to a section element, accounting for the sticky navbar height.
 * @param sectionId  Element ID with or without leading "#" (e.g. "#features" or "features")
 */
export function scrollToSection(sectionId: string): void {
  const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
  const element = document.getElementById(id);
  if (!element) return;

  const navbar = document.querySelector("header");
  const headerOffset = navbar ? navbar.getBoundingClientRect().height : 90;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}
