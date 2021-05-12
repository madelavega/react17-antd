export const actionSuffix = {
  DONE  : '__DONE',
  FAILED: '__FAILED',
};

const genAction = (actionPrefix, action) => `${actionPrefix}_${action}`,
      asyncDoneAction = (action) => () => `${action}${actionSuffix.DONE}`,
      asyncFailedAction = (action) => () => `${action}${actionSuffix.FAILED}`;

/**
 *
 * @param {string} prefix prefix for the action
 * @param {string} actionBase base of the action to be enhance
 * @returns {{requestDoneAction(*), action: string, requestFailedAction(*)}}
 */
export default (prefix, actionBase) => {
  if(!prefix) {
    throw 'Empty prefix is not allowed. Please, send a prefix for your action (for example, the name of the related component)';
  }
  const action = genAction(prefix, actionBase);
  return {
    syncAction        : () => action,
    asyncAction       : () => action,
    asyncDoneAction   : asyncDoneAction(action),
    asyncFailedAction : asyncFailedAction(action),
  };
};