# POS Configuration Tool - Engineering Backlog

## Performance

### PERF-001: Optimize Store Hierarchy Re-rendering

Status: Pending

Current Behavior:
Selecting a node updates `selectedNodeId` in `HierarchyPanel`.
This causes the entire recursive tree to re-render.

Impact:
Not noticeable with small datasets.
Could become a performance bottleneck with thousands of stores.

Possible Solutions:
- React.memo()
- Stable props
- useCallback()
- useMemo()
- Tree virtualization (react-window)
- Redux selector optimization

Priority:
Medium

Target Sprint:
Performance Optimization Sprint