import { useSetModalState, useTranslate } from '@/hooks/common-hooks';
import { Button, Card, Flex, Space } from 'antd';
import ChatApiKeyModal from '../chat-api-key-modal';
import { usePreviewChat } from '../hooks';
import BackendServiceApi from './backend-service-api';

const ApiContent = ({
  id,
  idKey,
  hideChatPreviewCard = false,
}: {
  id?: string;
  idKey: string;
  hideChatPreviewCard?: boolean;
}) => {
  const { t } = useTranslate('chat');
  const {
    visible: apiKeyVisible,
    hideModal: hideApiKeyModal,
    showModal: showApiKeyModal,
  } = useSetModalState();
  // const { embedVisible, hideEmbedModal, showEmbedModal, embedToken } =
  //   useShowEmbedModal(idKey);

  const { handlePreview } = usePreviewChat(idKey);

  return (
    <div>
      <Flex vertical gap={'middle'}>
        <BackendServiceApi show={showApiKeyModal}></BackendServiceApi>
        {!hideChatPreviewCard && (
          <Card title={`${name} Web App`}>
            <Flex gap={8} vertical>
              <Space size={'middle'}>
                <Button onClick={handlePreview}>{t('preview')}</Button>
                {/* <Button onClick={() => showEmbedModal(id)}>
                  {t('embedded')}
                </Button> */}
              </Space>
            </Flex>
          </Card>
        )}
        {/* <div style={{ position: 'relative' }}>
          <MarkdownToc content={apiDoc} />
        </div>
        <MarkdownPreview source={apiDoc}></MarkdownPreview> */}
      </Flex>
      {apiKeyVisible && (
        <ChatApiKeyModal
          hideModal={hideApiKeyModal}
          dialogId={id}
          idKey={idKey}
        ></ChatApiKeyModal>
      )}
      {/* {embedVisible && (
        <EmbedModal
          token={embedToken}
          visible={embedVisible}
          hideModal={hideEmbedModal}
        ></EmbedModal>
      )} */}
    </div>
  );
};

export default ApiContent;
