import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import usePaginationOnScroll from "./usePaginationOnScroll";

describe("usePaginationOnScroll", () => {
  let observe: ReturnType<typeof vi.fn>;
  let unobserve: ReturnType<typeof vi.fn>;
  let disconnect: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();

    global.IntersectionObserver = vi.fn(function (this: any, callback) {
      this.observe = observe;
      this.unobserve = unobserve;
      this.disconnect = disconnect;

      // Save trigger method to simulate intersection later
      this.trigger = () => callback([{ isIntersecting: true }]);
    }) as unknown as typeof IntersectionObserver;
  });

  it("calls loadMore when the observed element intersects", () => {
    const mockLoadMore = vi.fn();

    // Destructure rerender from renderHook
    const { result, rerender } = renderHook(() =>
      usePaginationOnScroll({ loadMore: mockLoadMore })
    );

    const div = document.createElement("div");
    result.current.observerRef.current = div;

    act(() => {
      rerender();
    });

    // Simulate intersection
    const instance = (IntersectionObserver as any).mock.instances[0];
    act(() => {
      instance.trigger();
    });

    expect(observe).toHaveBeenCalledWith(div);
    expect(mockLoadMore).toHaveBeenCalled();
  });
});
