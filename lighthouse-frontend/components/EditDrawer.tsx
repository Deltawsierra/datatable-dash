'use client';

import { useEffect } from 'react';
import { Drawer, Form, Input, Button, Typography, Divider, Space, Tag } from 'antd';
import { EditOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

export interface ColumnDef {
  key: string;
  title: string;
}

export type SelectionType = 'cell' | 'row' | 'column';
export type DrawerAction = 'add' | 'edit';

interface EditDrawerProps {
  open: boolean;
  onClose: () => void;
  action: DrawerAction;
  selectionType: SelectionType;
  selectedRow: Record<string, unknown> | null;
  selectedColumnKey: string | null;
  columns: ColumnDef[];
  onSave: (values: Record<string, unknown>, isNew: boolean) => void;
}

export default function EditDrawer({
  open,
  onClose,
  action,
  selectionType,
  selectedRow,
  selectedColumnKey,
  columns,
  onSave,
}: EditDrawerProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) return;
    if (action === 'edit' && selectedRow) {
      const initial: Record<string, unknown> = {};
      if (selectionType === 'cell' && selectedColumnKey) {
        initial[selectedColumnKey] = selectedRow[selectedColumnKey] ?? '';
      } else {
        columns.forEach(c => { initial[c.key] = selectedRow[c.key] ?? ''; });
      }
      form.setFieldsValue(initial);
    } else {
      form.resetFields();
    }
  }, [open, action, selectedRow, selectionType, selectedColumnKey, columns, form]);

  const handleSave = () => {
    const values = form.getFieldsValue();
    onSave(values, action === 'add');
    onClose();
  };

  const formColumns =
    selectionType === 'cell' && selectedColumnKey && action === 'edit'
      ? columns.filter(c => c.key === selectedColumnKey)
      : columns;

  const readOnlyColumns =
    selectionType === 'cell' && selectedColumnKey
      ? columns.filter(c => c.key === selectedColumnKey)
      : columns;

  const drawerTitle = action === 'add'
    ? 'Add New Row'
    : selectionType === 'cell'
      ? 'Edit Cell'
      : selectionType === 'column'
        ? 'Edit Column'
        : 'Edit Row';

  return (
    <Drawer
      title={
        <Space>
          {action === 'add' ? <PlusOutlined /> : <EditOutlined />}
          {drawerTitle}
        </Space>
      }
      placement="right"
      width={420}
      open={open}
      onClose={onClose}
      styles={{ body: { paddingBottom: 0 }, footer: { padding: '16px 24px' } }}
      footer={
        <Button
          type="primary"
          block
          size="large"
          onClick={handleSave}
          data-testid="button-save-changes"
        >
          Save Changes
        </Button>
      }
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'rgba(22,119,255,0.06)',
          border: '1px solid rgba(22,119,255,0.2)',
          borderRadius: 6,
          padding: '8px 12px',
          marginBottom: 20,
          fontSize: 12,
          color: '#1677ff',
        }}
      >
        <InfoCircleOutlined />
        Changes are saved locally until a backend write API is connected.
      </div>

      {action === 'edit' && selectedRow && (
        <>
          <Text
            type="secondary"
            style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}
          >
            Selected {selectionType === 'cell' ? 'Cell' : selectionType === 'column' ? 'Column' : 'Row'}
          </Text>
          <div
            style={{
              background: 'var(--content-bg, #f8fafc)',
              border: '1px solid var(--border-color, #e2e8f0)',
              borderRadius: 8,
              padding: '12px 14px',
              marginTop: 8,
              marginBottom: 20,
            }}
          >
            {readOnlyColumns.map(col => (
              <div
                key={col.key}
                style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start' }}
              >
                <Text
                  type="secondary"
                  style={{ fontSize: 12, minWidth: 110, flexShrink: 0, paddingTop: 1 }}
                >
                  {col.title}
                </Text>
                <Tag
                  style={{
                    margin: 0,
                    maxWidth: 220,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                  }}
                >
                  {String(selectedRow[col.key] ?? '—')}
                </Tag>
              </div>
            ))}
          </div>
          <Divider style={{ margin: '0 0 20px' }} />
        </>
      )}

      <Text
        type="secondary"
        style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}
      >
        {action === 'add' ? 'New Row Values' : 'Edit Values'}
      </Text>

      <Form form={form} layout="vertical" style={{ marginTop: 12 }}>
        {formColumns.map(col => (
          <Form.Item
            key={col.key}
            name={col.key}
            label={col.title}
            style={{ marginBottom: 14 }}
          >
            <Input
              placeholder={`Enter ${col.title.toLowerCase()}…`}
              data-testid={`input-field-${col.key}`}
            />
          </Form.Item>
        ))}
      </Form>
    </Drawer>
  );
}
