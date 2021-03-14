import checkPropTypes from "check-prop-types"

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}
export const checkProps = (component,conforminProps) => {
    const propError = checkPropTypes(component.propTypes,conforminProps,'prop',component.name)
    expect(propError).toBeUndefined();

}