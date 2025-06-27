import React from 'react';
import PropTypes from 'prop-types';

// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// components
import Iconify from 'src/components/iconify';

const PrivacyPolicy = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          pt: 6,
        }}
      >
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
          }}
        >
          CHÍNH SÁCH BẢO MẬT
        </Typography>

        <Title>Giới thiệu</Title>
        <Paragraph>
          Đây là Chính sách Bảo mật của <AppName /> (“
          <AppName />
          ”). Chính sách này áp dụng cho tất cả các ứng dụng phần mềm, trang web và dịch vụ liên
          quan của <AppName />.
        </Paragraph>
        <Paragraph>
          Theo nguyên tắc chung, người dùng các ứng dụng phần mềm và dịch vụ của chúng tôi là ẩn
          danh đối với chúng tôi, và chúng tôi không có cách khả thi nào để xác định danh tính của
          bạn. Tuy nhiên, một số loại dữ liệu có thể được thu thập khi sử dụng ứng dụng và dịch vụ
          của chúng tôi, và một số thông tin này có thể được coi là “dữ liệu cá nhân” theo luật
          pháp. Khi chúng tôi thu thập dữ liệu cá nhân, chúng tôi thường hành động như một “bên kiểm
          soát dữ liệu” như được định nghĩa trong luật áp dụng. Các loại dữ liệu cụ thể mà chúng tôi
          thu thập, lý do thu thập và lựa chọn từ chối của bạn phụ thuộc vào ứng dụng hoặc dịch vụ
          bạn sử dụng, như được mô tả đầy đủ hơn bên dưới.
        </Paragraph>
        <Paragraph>
          Khi chúng tôi đăng các thay đổi vào Chính sách Bảo mật này, chúng tôi sẽ bao gồm ngày
          Chính sách này được cập nhật lần cuối.
        </Paragraph>

        <Title>
          Cách <AppName sx={{ fontWeight: 700 }} /> thu thập thông tin
        </Title>
        <Paragraph>
          <AppName /> có thể sử dụng các phương thức khác nhau sau đây để nhận và thu thập thông tin
          của bạn:
        </Paragraph>
        <List
          sx={{
            pt: 0,
          }}
        >
          <Gist>
            <Title variant="h4">Đăng ký tài khoản</Title>
          </Gist>
          <Paragraph>
            Khi đăng ký một tài khoản <AppName />, hệ thống sẽ yêu cầu bạn cung cấp thông tin để
            chúng tôi có thể ghi nhận bạn là chủ sở hữu của sản phẩm <AppName />, điều này sẽ giúp
            chúng tôi cung cấp cho bạn dịch vụ và thông tin.
          </Paragraph>
          <Paragraph>
            Sử dụng sản phẩm, khi bạn truy cập trang web của chúng tôi hoặc đăng nhập vào khách hàng
            <AppName />, chúng tôi sẽ cần đủ thông tin để hoàn thành thao tác của bạn, và máy chủ
            của chúng tôi sẽ tự động thu thập và tổng hợp thông tin về lần truy cập của bạn. Thông
            tin thu thập có thể bao gồm thông tin của tài khoản <AppName /> của người đăng nhập, IP
            truy cập, hệ điều hành, loại trình duyệt, v.v.
          </Paragraph>
          <Paragraph>
            Hỗ trợ khách hàng, bạn có thể gọi điện hoặc liên hệ với chúng tôi qua Facebook, Zalo,
            Skype, Telegram và các kênh giao tiếp khác để yêu cầu hỗ trợ kỹ thuật về sản phẩm hoặc
            thông tin về sản phẩm của chúng tôi, thông tin cá nhân hoặc tài khoản có thể được cung
            cấp cho chúng tôi.
          </Paragraph>

          <Gist>
            <Title variant="h4">Hoạt động khuyến mãi và tiếp thị</Title>
          </Gist>
          <Paragraph>
            Nếu bạn quyết định cung cấp phản hồi cho <AppName /> hoặc tham gia vào một chiến dịch
            khuyến mãi, cuộc thi, hoặc khảo sát do <AppName /> hoặc đối tác của chúng tôi tổ chức
            thay mặt cho <AppName />, chúng tôi có thể yêu cầu thông tin như tên, tuổi, số điện
            thoại, email hoặc địa chỉ bưu điện của bạn.
          </Paragraph>
          <Paragraph>
            Nếu bạn đồng ý nhận thông tin tiếp thị từ <AppName /> qua email, SMS, hoặc thông báo
            đẩy, chúng tôi có thể sử dụng nhà cung cấp công nghệ bên thứ ba để gửi những thông điệp
            đó cho bạn. Bạn có thể từ chối trực tiếp từ email tiếp thị mà bạn nhận được.
          </Paragraph>
          <Paragraph>
            Nếu bạn gửi số điện thoại hoặc địa chỉ email của mình trên trang tải xuống ứng dụng,
            chúng tôi có thể gửi cho bạn liên kết tải xuống hoặc tài liệu quảng cáo qua SMS hoặc
            email cho sự tiện lợi của bạn.
          </Paragraph>
          <Paragraph>
            Chúng tôi chỉ sử dụng dữ liệu này để cung cấp dịch vụ bạn yêu cầu và sẽ không giữ dữ
            liệu của bạn lâu hơn mức cần thiết để hoàn thành mục đích cụ thể đó. Nếu bạn không thoải
            mái với việc chúng tôi sử dụng dữ liệu đã nộp cho một mục đích hạn chế, thì đừng cung
            cấp nó cho chúng tôi.
          </Paragraph>

          <Gist>
            <Title variant="h4">
              Mục đích của thông tin được <AppName sx={{ fontWeight: 700 }} /> thu thập
            </Title>
          </Gist>
          <Paragraph>
            Chúng tôi sử dụng thông tin này cho một số mục đích kinh doanh hợp pháp, cụ thể là:
          </Paragraph>
          <ul
            style={{
              paddingLeft: '40px',
            }}
          >
            <Paragraph component="li">Để cung cấp dịch vụ đăng ký cho người dùng.</Paragraph>
            <Paragraph component="li">Để xử lý thanh toán.</Paragraph>
            <Paragraph component="li">
              Để thông báo cho người dùng về bất kỳ nâng cấp nào, nhắc nhở dịch vụ, khuyến mãi hoặc
              thông tin khác mà người dùng có thể quan tâm.
            </Paragraph>
            <Paragraph component="li">
              Để phản hồi các yêu cầu của người dùng và không ngừng cố gắng cải thiện trang web, sản
              phẩm và dịch vụ của chúng tôi dựa trên thông tin và phản hồi từ người dùng.
            </Paragraph>
            <Paragraph component="li">Đối với định vị IP và chống gian lận.</Paragraph>
            <Paragraph component="li">
              Để xác định danh tính của chủ sở hữu tài khoản người dùng, và sử dụng nó để theo dõi
              chính xác tài khoản người dùng, và hỗ trợ nhân viên kỹ thuật phân tích và xử lý các
              vấn đề mà người dùng có thể gặp phải.
            </Paragraph>
            <Paragraph component="li">
              Chúng tôi rất coi trọng việc bảo vệ dữ liệu người dùng và bảo vệ quyền riêng tư của
              người dùng. Nếu không có sự cho phép của người dùng, chúng tôi sẽ không bao giờ công
              bố bất kỳ thông tin nào cho bên thứ ba, và chúng tôi sẽ không bán dữ liệu của người
              dùng.
            </Paragraph>
            <Paragraph component="li">
              Để hiểu rõ hơn cách mọi người tương tác với ứng dụng và dịch vụ của chúng tôi.
            </Paragraph>
            <Paragraph component="li">
              Để nâng cao, sửa đổi, tùy chỉnh hoặc cải thiện ứng dụng và dịch vụ của chúng tôi theo
              cách khác.
            </Paragraph>
            <Paragraph component="li">Để ngăn chặn các vi phạm bảo mật và lạm dụng.</Paragraph>
          </ul>
          <Paragraph>
            Nói chung, thông tin này giúp chúng tôi cải thiện sản phẩm và dịch vụ của mình. Chúng
            tôi không có cách thực tế nào sử dụng thông tin này để xác định danh tính cá nhân của
            bạn. Chúng tôi có thể lưu trữ dữ liệu sử dụng này lên đến ba năm.
          </Paragraph>

          <Gist>
            <Title variant="h4">Nhật Ký</Title>
          </Gist>
          <Paragraph>
            Nếu bạn truy cập các trang web của chúng tôi, chúng tôi có thể thu thập địa chỉ IP của
            bạn để giúp chẩn đoán các vấn đề với máy chủ của chúng tôi và quản lý các trang web của
            mình. Chúng tôi chỉ sử dụng địa chỉ IP cho mục đích này và có thể giữ nhật ký truy cập
            trang web lên đến sáu tháng.
          </Paragraph>

          <Gist>
            <Title variant="h4">Sử Dụng Cookie</Title>
          </Gist>
          <Paragraph>
            Chúng tôi sử dụng cookie trên các trang web của mình cho việc quản lý phiên và giữ các
            cài đặt hoặc tùy chọn của bạn. Chúng tôi cũng có thể sử dụng cookie của bên thứ ba để
            thu thập thống kê về người truy cập và đo lường các chiến dịch tiếp thị của chúng tôi.
            Nếu bạn muốn từ chối cookie của bên thứ ba, vui lòng cấu hình cài đặt trình duyệt của
            bạn cho phù hợp.
          </Paragraph>

          <Gist>
            <Title variant="h4">Quyền Riêng Tư của Trẻ Em</Title>
          </Gist>
          <Paragraph>
            Không có bảo đảm rằng trẻ em không thể truy cập vào các trang web của chúng tôi hoặc sử
            dụng ứng dụng của chúng tôi mà không có sự đồng ý hoặc thông báo của cha mẹ. Do đó, và
            như được quy định trong Thỏa Thuận Cấp Phép Người Dùng Cuối của chúng tôi, chúng tôi yêu
            cầu trẻ em bao gồm cha mẹ của họ trong quá trình tải xuống, và chúng tôi khuyến khích
            cha mẹ đọc Chính Sách Bảo Mật này trước khi cho phép con cái họ sử dụng ứng dụng và dịch
            vụ của chúng tôi.
          </Paragraph>

          <Gist>
            <Title variant="h4">Bảo Mật Thông Tin Cá Nhân</Title>
          </Gist>
          <Paragraph>
            Việc bảo vệ thông tin của người dùng là ưu tiên hàng đầu của chúng tôi, và chúng tôi áp
            dụng các biện pháp nghiêm ngặt nhằm bảo vệ dữ liệu của mình khỏi việc truy cập, sử dụng,
            tiết lộ hoặc phá hủy trái phép. Chúng tôi đã thực hiện các biện pháp bảo mật vật lý, kỹ
            thuật và hành chính cho Dịch Vụ phù hợp với các luật áp dụng và tiêu chuẩn ngành. Ví dụ,
            chúng tôi sử dụng tường lửa, công nghệ mã hóa và các phần mềm tự động khác được thiết kế
            để bảo vệ chống lại gian lận và trộm cắp danh tính; dữ liệu của chúng tôi chỉ được lưu
            trữ tại các trung tâm cung cấp mức độ bảo mật cao cho thông tin của Người dùng. Việc
            truy cập vật lý được kiểm soát nghiêm ngặt cả ở chu vi và tại các điểm vào tòa nhà bởi
            nhân viên của chúng tôi sử dụng giám sát video và các phương tiện điện tử khác.
          </Paragraph>
          <Paragraph>
            Chúng tôi cũng bảo vệ quyền riêng tư của Người dùng bằng cách tìm cách giảm thiểu lượng
            dữ liệu nhạy cảm mà chúng tôi lưu trữ trên máy chủ của mình ngay từ đầu. Chúng tôi cũng
            tìm kiếm sự bảo vệ hợp đồng thích hợp từ các đối tác của mình về cách họ xử lý dữ liệu
            người dùng.
          </Paragraph>
        </List>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

function AppName({ sx }) {
  return (
    <Typography component="span" color="primary" fontStyle="italic" sx={sx}>
      MKTLogin
    </Typography>
  );
}

AppName.propTypes = {
  sx: PropTypes.object,
};

function Title({ id, children, variant = 'h2' }) {
  return (
    <Typography id={id} variant={variant} fontSize="1.125rem" lineHeight={1.55556} fontWeight={700}>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

//----------------------------------------------------------------

function Paragraph({ component, children, gutterBottom = false }) {
  return (
    <Typography component={component} paragraph gutterBottom={gutterBottom} align="justify">
      {children}
    </Typography>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node,
  gutterBottom: PropTypes.bool,
  component: PropTypes.string,
};

//----------------------------------------------------------------

function Gist({ children }) {
  return (
    <ListItem>
      <ListItemIcon
        sx={{
          minWidth: '20px',
          width: '20px',
          aspectRatio: '1 / 1',
          mr: '16px',
        }}
      >
        <Iconify icon="radix-icons:dash" />
      </ListItemIcon>
      <ListItemText
        primary={children}
        primaryTypographyProps={{
          typography: 'body1',
        }}
      />
    </ListItem>
  );
}

Gist.propTypes = {
  children: PropTypes.node,
};
